class Student {
  final String name;
  final String grade;
  final Map<String, Object> map;

  const Student({
    required this.grade,
    required this.name,
    required this.map,
  });

  Student copy({
    String? name,
    String? grade,
    Map<String, Object>? map,
  }) {
    return Student(
      name: name ?? this.name,
      grade: grade ?? this.grade,
      map: map ?? this.map,
    );
  }

  Map<String, Object?> toJson() => {'name': name, 'grade': grade, 'map': map};

  static Student fromJson(Map<String, Object?> data) {
    return Student(
      grade: data['grade'] as String,
      name: data['name'] as String,
      map: data['map'] == null ? {} : data['map'] as Map<String, Object>,
    );
  }
}

enum MapKey { a, b, c }


abstract class ICalClass{
  void add(){}
  void substract(){}
}







