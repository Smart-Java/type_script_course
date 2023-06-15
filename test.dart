String last() {
  DateTime a = DateTime.now();
  String returnDate = '';
  int lastTwoWeeks = 14;
  int lastTwoWeeksDay = 0;
  int lastTwoWeeksMonth = 0;
  int lastTwoWeeksYear = 0;
  if (a.day > 14) {
    lastTwoWeeksDay = a.day - lastTwoWeeks;
    lastTwoWeeksMonth = a.month;
    lastTwoWeeksYear = a.year;
  } else {
    lastTwoWeeksMonth = a.month - 1;
    lastTwoWeeksYear = a.year;
    if (lastTwoWeeksMonth == 2) {
      lastTwoWeeksDay = (28 - lastTwoWeeks) + a.day;
    } else if (lastTwoWeeksMonth == 1 ||
        lastTwoWeeksMonth == 8 ||
        lastTwoWeeksMonth == 10 ||
        lastTwoWeeksMonth == 12 ||
        lastTwoWeeksMonth == 3) {
      lastTwoWeeksDay = (30 - lastTwoWeeks) + a.day;
    } else if (lastTwoWeeksMonth == 4 ||
        lastTwoWeeksMonth == 5 ||
        lastTwoWeeksMonth == 7 ||
        lastTwoWeeksMonth == 10 ||
        lastTwoWeeksMonth == 9 ||
        lastTwoWeeksMonth == 11) {
      lastTwoWeeksDay = (31 - lastTwoWeeks) + a.day;
    }
  }
  String monthValue = '';
  String dayValue = '';
  if (lastTwoWeeksMonth.toString().length > 1) {
    monthValue = '$lastTwoWeeksMonth';
  } else {
    monthValue = '0$lastTwoWeeksMonth';
  }

  if (lastTwoWeeksDay.toString().length > 1) {
    dayValue = '$lastTwoWeeksDay';
  } else {
    dayValue = '0$lastTwoWeeksDay';
  }
  returnDate = '$lastTwoWeeksYear-$monthValue-$dayValue';
  return returnDate;
}

void main(List<String> args) {
  var a = last();
  print(a);
  print(DateTime.parse(a).toString());

  var b = {'a': 12, 'b': []};
  b.forEach((key, value) {
    if (key == 'a') {
      print(value);
    }
  });

  // var a = DateTime.now();
  // a.

  // print();
}
