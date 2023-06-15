import 'dart:isolate';

import 'model.dart';

Future<bool> boolIso(
    {required Future<bool> functionality()}) async {
  bool value = await Isolate.run(functionality);
  return value;
}

var a = {
  'students': [
    {
      'name': 'Student A',
      'grade': 'A',
      'age': 1,
      'map': {'a': 1, 'b': 2},
    },
    {
      'name': 'Student B',
      'grade': 'B',
      'age': 2,
      'map': {'a': 3, 'b': 4},
    },
    {
      'name': 'Student C',
      'grade': 'C',
      'age': 3,
      'map': null,
    },
    {
      'name': 'Student C',
      'grade': 'C',
      'age': 3,
      'map': {
        'a': 3,
      },
    },
  ]
};

var c = {
  'name': 'Student C',
  'grade': 'C',
  'age': 3,
  'map': {
    'a': 3,
  },
};

List<Student> b =
    List<Student>.from(a['students']!.map((x) => Student.fromJson(x))).toList();

class CalClass implements ICalClass {
  @override
  void add() {
    print('add');
  }

  @override
  void substract() {
    print('substract');
  }
}

void main(List<String> args) {
  for (var element in b) {
    print(element.map[MapKey.a.name]);
  }
}
