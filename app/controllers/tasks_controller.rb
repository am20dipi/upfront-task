class TasksController < ApplicationController
  before_action :set_task, only: [:show, :update, :destroy]

  # GET /tasks
  def index
    @tasks = Task.all
    #options = {}
    # create an options hash
    #options[:include] = [:task_notes]
    # within the options hash, create a key called "include" with value of "task_notes"
    render json: TaskSerializer.new(@tasks) # only: [:name, :completed, :task_date], include: :task_notes 
  end

  # GET /tasks/1
  def show
    render json: @task
  end

  # POST /tasks
  def create
    @task = Task.new(task_params)

    if @task.save
      render json: @task, status: :created, location: @task
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tasks/1
  def update
    if @task.update(task_params)
      render json: @task
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tasks/1
  def destroy
    @task.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_task
      @task = Task.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def task_params
      params.require(:task).permit(:name, :completed, :task_date)
    end
end
