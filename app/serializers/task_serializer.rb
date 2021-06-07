class TaskSerializer
  include JSONAPI::Serializer
  attributes :name, :task_date, :completed, :task_notes
end
