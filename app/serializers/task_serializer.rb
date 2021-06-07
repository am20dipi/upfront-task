class TaskSerializer
  include JSONAPI::Serializer
  attributes :name, :task_date, :completed, :task_notes
  #has_many :task_notes, include: [:content, :task_id], except: [:created_at, :updated_at]


end
