class TaskNote < ApplicationRecord
  #include FastJsonapi::ObjectSerializer
  belongs_to :task
end
