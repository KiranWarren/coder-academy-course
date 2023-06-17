# A simple application that allows uers to manage their to-do lists. Users can add tasks, mark them as complete, and remove
# tasks from the list.

# Homework: add notes to task, add task id to search from name or id

from clear import *

# Need a way to store all the information
tasks = {}


# Present user with options
def print_options():
    clear_terminal()
    print(
        """
    To-do List Options

    Enter options from the list below:

    [1] List all tasks
    [2] Add new task
    [3] Remove task
    [4] Mark task as completed
    [Enter anything else to exit]
    """
    )


def list_tasks():
    clear_terminal()
    print("----------Your Tasks----------")

    if len(tasks.keys()) < 1:
        print("No tasks added")

    for name, _ in tasks.items():
        print(get_task(name))


def add_task():
    clear_terminal()
    print("--------Add Your Task--------")

    task = input("Enter your task name: ")
    tasks[task] = False

    clear_terminal()
    print("New task added!")
    print(get_task(task))


def remove_task():
    list_tasks()

    print("---------Remove Task--------")
    task = input("Enter your task name: ")

    try:
        del tasks[task]
        print(task, "was deleted!")
    except KeyError:
        print(task, "was not found.")


def mark_task():
    list_tasks()

    print("---------Complete Task--------")
    task = input("Enter your task name: ")

    try:
        tasks[task]
    except KeyError:
        print(task, "not found.")
    else:
        tasks[task] = True
        list_tasks()


def get_task(name):
    if tasks[name]:
        return f"Task is '{name}' - (DONE)"
    return f"Task is '{name}'"


# Run our application to get input from the user
while True:
    print_options()

    option = int(input("Enter your selection: "))

    match option:
        case 1:
            list_tasks()
        case 2:
            add_task()
        case 3:
            remove_task()
        case 4:
            mark_task()
        case _:
            break

    input("Press enter to continue...")

print("Application closed")
# Perform operation if needed
