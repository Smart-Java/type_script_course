class OrderModel {
  final int id;
  final String status;
  final String rating;
  final String feedback;
  final int orderNumber;
  final Map<String, Object> activityLog;
  final Map<String, Object> pickUp;
  final Map<String, Object> destination;
  final Map<String, Object> assignedCarrier;
  final Map<String, Object> costing;

  const OrderModel({
    required this.id,
    required this.status,
    required this.rating,
    required this.activityLog,
    required this.assignedCarrier,
    required this.costing,
    required this.destination,
    required this.feedback,
    required this.orderNumber,
    required this.pickUp,
  });

  Map<String, Object?> toMap() => {
        'id': id,
        'status': status,
        'rating': rating,
        'activityLog': activityLog,
        'assignedCarrier': assignedCarrier,
        'costing': costing,
        'destination': destination,
        'feedback': feedback,
        'orderNumber': orderNumber,
        'pickUp': pickUp,
      };

  static OrderModel fromMap(Map<String, Object?> data) {
    return OrderModel(
      activityLog: data['activity_log'] == null
          ? {}
          : data['activity_log'] as Map<String, Object>,
      assignedCarrier: data['assigned_carrier'] == null
          ? {}
          : data['assigned_carrier'] as Map<String, Object>,
      costing:
          data['costing'] == null ? {} : data['costing'] as Map<String, Object>,
      destination: data['deliver_to'] == null
          ? {}
          : data['deliver_to'] as Map<String, Object>,
      feedback: data['feedback'] as String,
      id: data['id'] as int,
      orderNumber: data['orderNumber'] as int,
      pickUp:
          data['pickup'] == null ? {} : data['pickup'] as Map<String, Object>,
      rating: data['rating'] as String,
      status: data['orderState'] as String,
    );
  }
}
