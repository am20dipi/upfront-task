class TaskSerializer
  include JSONAPI::Serializer
  attributes :name, :task_date, :completed
  has_many :task_notes
end
