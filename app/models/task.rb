class Task < ApplicationRecord
    #include FastJsonapi::ObjectSerializer
    has_many :task_notes
end
