import 'dart:async';
import 'dart:isolate';

import 'model_test.dart';

enum Alphabets { a_b, b, c, d }

late Isolate isolate;
late Timer timer;

bool negative = false;

Future<void> startA() async {
  ReceivePort receivePort = ReceivePort();
  isolate = await Isolate.spawn((SendPort sendPort) {
    timer = Timer.periodic(const Duration(seconds: 5), (timer) {
      for (var i = 0; i < 10; i++) {
        sendPort.send('message from startA $i');
      }
    });
  }, receivePort.sendPort);

  receivePort.listen((message) {
    print(message);
  });
}

Future<void> startB() async {
  ReceivePort receivePort = ReceivePort();
  isolate = await Isolate.spawn((SendPort sendPort) {
    for (var i = 0; i < 10; i++) {
      sendPort.send('message from startB $i');
    }
  }, receivePort.sendPort);

  receivePort.listen((message) {
    print(message);
  });
}

List<Future> futureTasks = [
  startA(),
  startB(),
];

Future<void> backgroundTasks() async {
  await Future.wait(futureTasks);
}

void main(List<String> args) async {
  // await Timer.periodic(const Duration(seconds: 1), (timer) async {
  // await backgroundTasks();
  // });

  // Timer.periodic(Duration(seconds: 1), (timer) {
  //   print('a 1');
  // });
  negative = await boolIso(
    functionality: () async {
      return true;
    },
  );
  print('this is the negative state $negative');
  negative = await boolIso(
    functionality: () async {
      return false;
    },
  );
  print('this is the negative state $negative');
  await backgroundTasks();
  // Alphabets.values.forEach((element) {
  //   print(element.name.replaceFirst('_', ' '));
  // });
  // const c = Alphabets.b;
  // switch (c) {
  //   case Alphabets.a_b:
  //     break;
  //   default:
  // }
}
