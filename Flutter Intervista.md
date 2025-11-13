# Preparazione Colloquio Tecnico per Flutter Developer

Ecco una guida completa per prepararti al colloquio tecnico basata sul tuo CV:

## 1. DOMANDE SU FLUTTER E DART

### **Dart Language**
**Domanda: "Quali sono le caratteristiche principali di Dart?"**
```dart
// Risposta con esempi:
- Null Safety: String? name; // Variabile nullable
- Async/Await: 
  Future<void> fetchData() async {
    var data = await http.get(Uri.parse('url'));
  }
- Generics: List<String>, Future<T>
- Mixins: 
  mixin ValidationMixin {
    bool isValidEmail(String email) => email.contains('@');
  }
```

**Domanda: "Come gestisci la programmazione asincrona in Dart?"**
```dart
// Risposta:
Future<String> getUserData() async {
  try {
    final response = await http.get(Uri.parse('api/user'));
    return response.body;
  } catch (e) {
    throw Exception('Failed to load user data: $e');
  }
}

// Alternative con then():
getUserData().then((data) => print(data)).catchError((e) => print(e));
```

### **Widget e UI**
**Domanda: "Differenza tra Stateless e Stateful Widget"**
```dart
// Stateless Widget
class MyText extends StatelessWidget {
  final String text;
  const MyText({super.key, required this.text});

  @override
  Widget build(BuildContext context) {
    return Text(text);
  }
}

// Stateful Widget
class Counter extends StatefulWidget {
  @override
  _CounterState createState() => _CounterState();
}

class _CounterState extends State<Counter> {
  int count = 0;
  
  void increment() => setState(() => count++);

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: increment,
      child: Text('Count: $count'),
    );
  }
}
```

## 2. GESTIONE STATO (STATE MANAGEMENT)

### **Provider**
**Domanda: "Come implementeresti Provider in un'app?"**
```dart
// Model
class UserModel with ChangeNotifier {
  String _name = '';
  
  String get name => _name;
  
  void setName(String name) {
    _name = name;
    notifyListeners(); // Notifica i listener del cambiamento
  }
}

// Nel widget
Consumer<UserModel>(
  builder: (context, userModel, child) {
    return Text('Ciao ${userModel.name}');
  }
)
```

### **BLoC Pattern**
**Domanda: "Spiega il pattern BLoC"**
```dart
// Event
abstract class CounterEvent {}
class IncrementEvent extends CounterEvent {}

// State
class CounterState {
  final int count;
  CounterState(this.count);
}

// BLoC
class CounterBloc extends Bloc<CounterEvent, CounterState> {
  CounterBloc() : super(CounterState(0)) {
    on<IncrementEvent>((event, emit) {
      emit(CounterState(state.count + 1));
    });
  }
}
```

## 3. ARCHITETTURE SOFTWARE

### **Clean Architecture**
**Domanda: "Come struttureresti un'app con Clean Architecture?"**
```
Presentation Layer (UI)
↓
Domain Layer (Business Logic)
↓
Data Layer (Repository Pattern)
```

```dart
// Repository Pattern
abstract class UserRepository {
  Future<User> getUser(int id);
}

class UserRepositoryImpl implements UserRepository {
  final UserRemoteDataSource remoteDataSource;
  final UserLocalDataSource localDataSource;

  @override
  Future<User> getUser(int id) async {
    try {
      final user = await remoteDataSource.getUser(id);
      await localDataSource.cacheUser(user);
      return user;
    } catch (e) {
      return localDataSource.getUser(id);
    }
  }
}
```

## 4. INTEGRAZIONI BACKEND

### **RESTful APIs**
**Domanda: "Come gestisci le chiamate API?"**
```dart
class ApiService {
  final Dio _dio = Dio();
  
  Future<Response> get(String endpoint) async {
    try {
      return await _dio.get(
        'https://api.example.com/$endpoint',
        options: Options(headers: {
          'Authorization': 'Bearer $token',
          'Content-Type': 'application/json',
        }),
      );
    } on DioException catch (e) {
      throw _handleError(e);
    }
  }
  
  String _handleError(DioException e) {
    switch (e.response?.statusCode) {
      case 401:
        return 'Unauthorized';
      case 404:
        return 'Not Found';
      default:
        return 'Network Error';
    }
  }
}
```

### **Firebase Integration**
**Domanda: "Come usi Firebase nella tua app?"**
```dart
// Authentication
Future<User?> signInWithEmail(String email, String password) async {
  try {
    UserCredential userCredential = await FirebaseAuth.instance
        .signInWithEmailAndPassword(email: email, password: password);
    return userCredential.user;
  } on FirebaseAuthException catch (e) {
    print('Error: ${e.message}');
    return null;
  }
}

// Firestore
Future<void> addUser(User user) async {
  await FirebaseFirestore.instance
      .collection('users')
      .doc(user.id)
      .set(user.toJson());
}
```

## 5. DATABASE LOCALI

### **SQLite con Drift**
**Domanda: "Come gestisci il database locale?"**
```dart
// Con Drift (ex Moor)
@DriftDatabase(tables: [Users])
class MyDatabase extends _$MyDatabase {
  MyDatabase() : super(_openConnection());

  @override
  int get schemaVersion => 1;

  Future<List<User>> getUsers() => select(users).get();
  
  Future<int> insertUser(UsersCompanion user) => into(users).insert(user);
}
```

## 6. MACHINE LEARNING

### **TensorFlow Lite Integration**
**Domanda: "Come integri modelli ML in Flutter?"**
```dart
class Classifier {
  late Interpreter _interpreter;
  
  Future<void> loadModel() async {
    try {
      _interpreter = await Interpreter.fromAsset('model.tflite');
    } catch (e) {
      print('Failed to load model: $e');
    }
  }
  
  List<dynamic> predict(List<dynamic> input) {
    var output = List.filled(1, 0).reshape([1, 1]);
    _interpreter.run(input, output);
    return output;
  }
}
```

## 7. DOMANDE COMPORTAMENTALI E DI ESPERIENZA

### **Progetti Personali**
**Domanda: "Raccontami del tuo gestionale palestre con ML"**
```
Risposta strutturata:
1. CONTESTO: "Ho sviluppato un'app completa per gestire palestre..."
2. TECNOLOGIE: "Flutter, Firebase, TensorFlow Lite per raccomandazioni"
3. SFIDE: "Integrazione ML in real-time, sincronizzazione dati offline"
4. SOLUZIONI: "Implementato cache locale, ottimizzato modello ML"
5. RISULTATI: "Migliorata esperienza utente del 30% con raccomandazioni personalizzate"
```

### **UsedTo.net Experience**
**Domanda: "Quali sfide hai affrontato come Tech Lead?"**
```
Punti chiave da evidenziare:
- Gestione architettura fullstack
- Ottimizzazione performance database MySQL
- Implementazione sicurezza
- Leadership tecnica e decisioni architetturali
```

## 8. DOMANDE DI CODING LIVE

### **Problemi Tipici**
```dart
// 1. Gestione lista con infinite scroll
class UserList extends StatefulWidget {
  @override
  _UserListState createState() => _UserListState();
}

class _UserListState extends State<UserList> {
  final ScrollController _controller = ScrollController();
  final List<User> _users = [];
  bool _isLoading = false;
  int _page = 0;

  @override
  void initState() {
    super.initState();
    _controller.addListener(_scrollListener);
    _loadUsers();
  }

  void _scrollListener() {
    if (_controller.position.pixels == _controller.position.maxScrollExtent) {
      _loadUsers();
    }
  }

  Future<void> _loadUsers() async {
    if (_isLoading) return;
    
    setState(() => _isLoading = true);
    final newUsers = await UserApi.getUsers(_page++);
    setState(() {
      _users.addAll(newUsers);
      _isLoading = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      controller: _controller,
      itemCount: _users.length + (_isLoading ? 1 : 0),
      itemBuilder: (context, index) {
        if (index == _users.length) {
          return Center(child: CircularProgressIndicator());
        }
        return UserItem(_users[index]);
      },
    );
  }
}
```

## 9. DOMANDE SULLE BEST PRACTICES

### **Performance Optimization**
**Domanda: "Come ottimizzi le performance di un'app Flutter?"**
```
Risposte:
- Usa const widgets dove possibile
- Implementa ListView.builder per liste lunghe
- Ottimizza rebuild con Consumer selettivo
- Usa immagini compress e cache
- Minimizza setState() calls
- Profila con Flutter DevTools
```

### **Testing**
```dart
// Unit Test
void main() {
  test('User model fromJson', () {
    final json = {'id': 1, 'name': 'John'};
    expect(User.fromJson(json).name, 'John');
  });
}

// Widget Test
void main() {
  testWidgets('Counter increments', (WidgetTester tester) async {
    await tester.pumpWidget(MyApp());
    expect(find.text('0'), findsOneWidget);
    
    await tester.tap(find.byIcon(Icons.add));
    await tester.pump();
    
    expect(find.text('1'), findsOneWidget);
  });
}
```

## 10. PREPARAZIONE PRATICA

### **Cosa ripassare:**
1. **Dart**: Null safety, async/await, streams
2. **Flutter**: Widget lifecycle, navigation, gestures
3. **State Management**: Provider, BLoC, Riverpod
4. **Architecture**: MVVM, Clean Architecture patterns
5. **APIs**: REST, GraphQL, WebSocket
6. **Database**: SQLite, Firestore
7. **Testing**: Unit, widget, integration tests

### **Esercitati su:**
- Creare un contatore con diversi state management
- Implementare una TODO app con persistenza
- Gestire autenticazione con Firebase
- Creare un custom widget complesso

### **Domande da fare al recruiter:**
1. "Qual è lo stack tecnologico principale del team?"
2. "Come è strutturato il processo di sviluppo (Agile/Scrum)?"
3. "Quali sono le principali sfide tecniche del progetto?"
4. "Come viene gestito il testing e la qualità del codice?"

Ricorda: porta esempi concreti dai tuoi progetti e sii pronto a mostrare codice dal tuo GitHub!