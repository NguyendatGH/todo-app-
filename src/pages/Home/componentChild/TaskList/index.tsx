import {
  Checkbox,
  Chip,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { getColor } from "../../../../ultils/getColor";

interface Props {
  taskList: {
    id: string;
    title: string;
    priority: string;
    isDone: boolean;
  }[];
  setTaskList: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        title: string;
        priority: string;
        isDone: boolean;
      }[]
    >
  >;
  filter: {
    high: boolean;
    normal: boolean;
    low: boolean;
  };

  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setEditedTask: React.Dispatch<
    React.SetStateAction<{
      id: string;
      title: string;
      priority: string;
      isDone: boolean;
    }>
  >;
}
function TaskList({
  taskList,
  filter,
  setTaskList,
  setOpen,
  setEditedTask,
}: Props) {
  const handleDelete = (x: number) => {
    const newArray = taskList.filter((task, index) => index !== x);
    setTaskList(newArray);
  };

  const toggleStatus = (x: number) => {
    const newTaskList = taskList.map((task, index) => {
      if (x === index) {
        return {
          ...task,
          isDone: !task.isDone,
        };
      }

      return task;
    });
    setTaskList(newTaskList);
  };

  const handleEditClick = (task: {
    id: string;
    title: string;
    priority: string;
    isDone: boolean;
  }) => {
    setOpen(true);
    setEditedTask(task);
  };

  return (
    <Container>
      <Typography variant="h6" marginBottom={1} marginTop={2}>
        Your tasks
      </Typography>
      <Stack direction={"column"} sx={{ width: "100%", height: "260px" }}>
        {taskList.map(
          (
            task: {
              id: string;
              title: string;
              priority: string;
              isDone: boolean;
            },
            index: number
          ) =>
            filter[task?.priority] ? (
              <Stack
                direction={"row"}
                gap={1}
                alignItems={"center"}
                key={index}
              >
                <Checkbox
                  checked={task?.isDone}
                  onChange={() => toggleStatus(index)}
                />
                <Typography
                  // variant="body"
                  flex={1}
                  sx={{
                    textDecoration: task.isDone ? "line-through" : "none",
                  }}
                >
                  {task.title}
                </Typography>
                <Chip label={task.priority} color={getColor(task.priority)} />
                <IconButton
                  aria-label="edit"
                  size="large"
                  onClick={() => handleEditClick(task)}
                >
                  <EditIcon fontSize="inherit" />
                </IconButton>
                <IconButton
                  aria-label="delete"
                  size="large"
                  onClick={() => handleDelete(index)}
                >
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              </Stack>
            ) : (
              <></>
            )
        )}
      </Stack>
    </Container>
  );
}

export default TaskList;
