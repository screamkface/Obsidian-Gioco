# Locking

## Well-formed transactions

A transaction is **well-formed** if every read or write operation on a database element is executed inside a critical section protected by a lock.

In other words, before a transaction reads or writes an object `A`, it must first acquire a lock on `A`, and it must release that lock only after it has finished using `A`.

Example:

```text
l1(A) r1(A) w1(A) u1(A)
```

Here `T1` locks `A`, reads and writes `A`, and then unlocks `A`.

A transaction is not well-formed if it reads or writes an object without holding the corresponding lock.

Example:

```text
r1(A) w1(A)
```

This is not well-formed because `T1` uses `A` without locking it first.

---

## Legal schedule

A schedule with locks is **legal** if two different transactions never hold incompatible locks on the same database element at the same time.

With only **exclusive locks**, this means that if one transaction holds a lock on `A`, no other transaction can obtain a lock on `A` until the first transaction releases it.

Example of legal behavior:

```text
l1(A) r1(A) u1(A) l2(A) r2(A) u2(A)
```

Example of illegal behavior:

```text
l1(A) l2(A)
```

This is illegal because `T2` obtains a lock on `A` while `T1` still holds it.

---

## Passive locking scheduler

The **passive locking scheduler** is a lock-based scheduler that takes as input a schedule that has already been extended with lock and unlock operations.

It is called **passive** because it does not insert lock or unlock operations by itself.

The transactions themselves explicitly request locks and release them. The scheduler only checks whether these requests can be granted.

The passive locking scheduler:

1. checks whether a requested lock can be granted;
    
2. grants the lock if the object is available;
    
3. blocks the transaction if the lock cannot be granted;
    
4. resumes blocked transactions when the required lock becomes available;
    
5. updates the lock table when locks are acquired or released.
    

Example:

```text
l1(A) r1(A) l2(A) w1(A) u1(A) r2(A) u2(A)
```

When `l2(A)` is requested, `A` is still locked by `T1`, so `T2` is blocked.  
After `u1(A)`, the lock on `A` is released and `T2` can continue.

The passive scheduler guarantees that the produced schedule is legal, assuming transactions request and release locks correctly. However, passive locking alone does not guarantee serializability. To guarantee conflict-serializability, we need an additional rule such as Two-Phase Locking.

---

## Active locking scheduler

The **active locking scheduler** is a lock-based scheduler that receives a schedule without explicit lock and unlock operations and automatically inserts them when needed.

It is called **active** because it actively decides when to acquire and release locks.

Given an input schedule such as:

```text
r1(A) w1(A) r2(A)
```

the active locking scheduler may transform it into a lock-extended schedule such as:

```text
l1(A) r1(A) w1(A) u1(A) l2(A) r2(A) u2(A)
```

The active locking scheduler:

1. **receives** read and write operations from transactions;
    
2. **inserts** the required lock before each read or write;
    
3. **blocks** transactions when the required lock is not available;
    
4. **inserts** unlock operations according to its locking policy;
    
5. **produces** a legal schedule.
    

With only exclusive locks:

```text
read(A)  requires an exclusive lock on A
write(A) requires an exclusive lock on A
```

With shared and exclusive locks:

```text
read(A)  requires a shared lock on A
write(A) requires an exclusive lock on A
```

The active locking scheduler is more powerful than the passive one because it does not rely on transactions to explicitly request locks. The scheduler itself is responsible for adding the locking operations.

However, even an active scheduler must follow a correct locking policy. If it releases locks too early, it may produce a schedule that is legal but not serializable.

---

## Passive vs Active locking scheduler

|Scheduler|Input|What it does|
|---|---|---|
|Passive locking scheduler|Schedule already containing lock/unlock operations|Checks lock requests, blocks/resumes transactions, updates lock table|
|Active locking scheduler|Schedule containing only read/write operations|Inserts locks/unlocks automatically and controls access to database elements|

The key difference is:

```text
Passive scheduler = checks locks already present in the input.
Active scheduler = adds locks and unlocks by itself.
```

---

## Important observation

Well-formed transactions and legal schedules are necessary, but they are not enough to guarantee serializability.

To guarantee conflict-serializability, the scheduler usually enforces **Two-Phase Locking**, where each transaction has two phases:

1. **Growing phase**: the transaction can acquire locks but cannot release them.
    
2. **Shrinking phase**: the transaction can release locks but cannot acquire new ones.
    

Once a transaction releases its first lock, it cannot acquire any other lock.

```text
2PL rule:
all lock operations must occur before all unlock operations inside each transaction.
```

---

## Data action projection: DT(S)

If `S` is a **lock-extended schedule**, then `DT(S)` denotes the **data action projection** of `S`.

This means that `DT(S)` is obtained by removing all lock and unlock operations from `S`, keeping only the data actions:

```text
read, write, commit, abort
```

So, `DT(S)` keeps only actions of type:

```text
r_i(X), w_i(X), c_i, a_i
```

and removes actions such as:

```text
l_i(X), sl_i(X), xl_i(X), u_i(X)
```

Example:

```text
S = l1(A) r1(A) w1(A) u1(A) l2(A) r2(A) u2(A) c1 c2
```

Then:

```text
DT(S) = r1(A) w1(A) r2(A) c1 c2
```

If a schedule already contains only data actions, then:

```text
DT(S) = S
```

---

## Why DT(S) is important in 2PL

The output of a locking scheduler usually contains both:

```text
1. lock/unlock operations
2. data operations
```

However, when we study serializability, conflict-serializability, strictness, or recoverability, we are mainly interested in the data operations, not in the auxiliary lock operations.

For this reason, we use `DT(S)` to ignore the locking operations and analyze the real database behavior.

In the context of Two-Phase Locking, we say that a data schedule `S` is a **2PL schedule** if there exists a lock-extended schedule `S'` generated by a 2PL scheduler such that:

```text
DT(S') = S
```

In other words:

```text
S is accepted by a 2PL scheduler
```

if the scheduler can insert suitable lock and unlock operations around the actions of `S`, while respecting the 2PL rule, and then, after removing the lock/unlock operations, we obtain exactly the original schedule `S`.

---

## Intuition

Suppose we have the data schedule:

```text
S = r1(A) w1(A) r2(A)
```

A 2PL scheduler may generate the lock-extended schedule:

```text
S' = xl1(A) r1(A) w1(A) u1(A) xl2(A) r2(A) u2(A)
```

If we remove the lock and unlock operations, we get:

```text
DT(S') = r1(A) w1(A) r2(A)
```

So:

```text
DT(S') = S
```

This means that the data schedule `S` can be produced by a 2PL scheduler.

---

## Important theorem

If a lock-extended schedule `S'` is generated by a 2PL scheduler, then:

```text
DT(S') is conflict-serializable
```

So the lock-extended schedule contains the locking details, while `DT(S')` is the actual data schedule whose serializability we check.

This is why `DT(S)` is important: it lets us connect the locking protocol with the usual theory of schedules and conflict-serializability.

---

## Two-Phase Locking — 2PL

The **Two-Phase Locking protocol**, also called **2PL**, is a locking protocol used to guarantee **conflict-serializability**.

The main idea is that each transaction must divide its execution into two phases:

1. **Growing phase**: the transaction can acquire locks, but cannot release locks.
    
2. **Shrinking phase**: the transaction can release locks, but cannot acquire new locks.
    

So, once a transaction releases its first lock, it cannot acquire any other lock.

```text
2PL rule:
all lock operations of a transaction must occur before all unlock operations of that transaction.
```

---

## Intuition

Locks alone are not enough to guarantee serializability.

A schedule can be:

```text
well-formed
legal
```

but still not conflict-serializable.

The 2PL rule prevents this problem by forcing each transaction to acquire all the locks it needs before it starts releasing any of them.

In other words:

```text
Before the first unlock, the transaction can still acquire locks.
After the first unlock, the transaction cannot acquire locks anymore.
```

---

## Example of a 2PL transaction

```text
l1(A) r1(A) l1(B) w1(B) u1(A) u1(B)
```

This transaction satisfies 2PL because all lock operations occur before all unlock operations:

```text
l1(A) l1(B)      u1(A) u1(B)
growing phase    shrinking phase
```

So `T1` first acquires locks, and only after that it starts releasing them.

---

## Example of a transaction that is not 2PL

```text
l1(A) r1(A) u1(A) l1(B) w1(B) u1(B)
```

This transaction does not satisfy 2PL because after releasing `A`:

```text
u1(A)
```

it acquires a new lock on `B`:

```text
l1(B)
```

This violates the 2PL rule.

```text
After the first unlock, no new lock can be acquired.
```

---

## 2PL schedule

A data schedule `S` is a **2PL schedule** if there exists a lock-extended schedule `S'` such that:

```text
DT(S') = S
```

and every transaction in `S'` satisfies the 2PL rule.

In other words, a schedule is 2PL if we can insert suitable lock and unlock operations around its read/write actions in such a way that:

1. the resulting lock-extended schedule is legal;
    
2. every transaction is well-formed;
    
3. every transaction follows the 2PL rule;
    
4. after removing locks and unlocks, we get the original data schedule.
    

---

## Important theorem

Every schedule generated by a 2PL scheduler is conflict-serializable.

```text
2PL  =>  conflict-serializable
```

This means that 2PL is a sufficient condition for conflict-serializability.

However, the converse is not always true:

```text
conflict-serializable  does not always imply  2PL
```

So 2PL guarantees conflict-serializability, but not every conflict-serializable schedule can necessarily be produced by a 2PL scheduler.

---

## Serial order induced by 2PL

If a schedule is generated by 2PL, then it is conflict-equivalent to a serial schedule.

The serial order is induced by the order in which transactions enter their shrinking phase, that is, by the order of their first unlock.

Intuitively:

```text
the transaction that performs its first unlock first comes first in the equivalent serial order.
```

Example:

```text
l1(A) l2(B) r1(A) r2(B) u2(B) u1(A)
```

First unlocks:

```text
T2 performs u2(B) before T1 performs u1(A)
```

So the serial order induced by 2PL is:

```text
T2 -> T1
```

---

## 2PL with exclusive locks

In the simplest version of locking, we use only **exclusive locks**.

An exclusive lock on `A` means that no other transaction can hold a lock on `A` at the same time.

With only exclusive locks:

```text
read(A)  requires an exclusive lock on A
write(A) requires an exclusive lock on A
```

Example:

```text
l1(A) r1(A) w1(A) u1(A)
```

Here `T1` obtains an exclusive lock on `A`, reads and writes `A`, and then releases the lock.

This version is correct, but it is very restrictive because even two transactions that only read the same object cannot read it concurrently.

---

## 2PL with shared and exclusive locks

To improve concurrency, DBMSs usually distinguish between:

```text
shared lock     = used for reading
exclusive lock  = used for writing
```

Notation:

```text
sl_i(A) = transaction Ti acquires a shared lock on A
xl_i(A) = transaction Ti acquires an exclusive lock on A
u_i(A)  = transaction Ti releases the lock on A
```

Rules:

```text
read(A)  requires a shared lock on A
write(A) requires an exclusive lock on A
```

Compatibility table:

|Held / Requested|Shared|Exclusive|
|---|--:|--:|
|Shared|yes|no|
|Exclusive|no|no|

So:

```text
Two shared locks on the same object are compatible.
An exclusive lock is incompatible with every other lock.
```

---

## Lock upgrade

A **lock upgrade** happens when a transaction first reads an object and later wants to write it.

Example:

```text
sl1(A) r1(A) xl1(A) w1(A) u1(A)
```

Here `T1` first obtains a shared lock on `A` to read it, then upgrades it to an exclusive lock in order to write it.

The upgrade is possible only if no other transaction holds an incompatible lock on `A`.

---

## 2PL with shared and exclusive locks

The 2PL rule remains the same:

```text
all shared/exclusive lock operations must occur before all unlock operations.
```

Example of a 2PL transaction:

```text
sl1(A) r1(A) xl1(B) w1(B) u1(A) u1(B)
```

This is 2PL because all locks occur before all unlocks.

Example of a non-2PL transaction:

```text
sl1(A) r1(A) u1(A) xl1(B) w1(B) u1(B)
```

This is not 2PL because after releasing `A`, the transaction acquires a new lock on `B`.

---

## Deadlock in 2PL

2PL guarantees conflict-serializability, but it does not prevent deadlocks.

Example:

```text
l1(A)
l2(B)
l1(B)
l2(A)
```

Here:

```text
T1 holds A and waits for B.
T2 holds B and waits for A.
```

So:

```text
T1 waits for T2
T2 waits for T1
```

This is a deadlock.

Therefore:

```text
2PL guarantees conflict-serializability, but deadlocks may still occur.
```

---

## How to check whether a schedule is 2PL

To check whether a lock-extended schedule is 2PL:

1. Check that the schedule is legal.
    
2. Check that every transaction is well-formed.
    
3. For each transaction, list its lock and unlock operations.
    
4. Verify that no transaction acquires a lock after releasing a lock.
    

Example:

```text
l1(A) r1(A) l1(B) w1(B) u1(A) u1(B)
```

For `T1`:

```text
l1(A), l1(B), u1(A), u1(B)
```

All locks come before all unlocks, so `T1` satisfies 2PL.

Example:

```text
l1(A) r1(A) u1(A) l1(B) w1(B) u1(B)
```

For `T1`:

```text
l1(A), u1(A), l1(B), u1(B)
```

There is a lock after an unlock, so `T1` does not satisfy 2PL.

---

## Summary

```text
2PL = all locks before all unlocks.
```

Each transaction has:

```text
Growing phase: acquire locks.
Shrinking phase: release locks.
```

Main property:

```text
2PL => conflict-serializable
```

But:

```text
2PL does not prevent deadlocks.
```