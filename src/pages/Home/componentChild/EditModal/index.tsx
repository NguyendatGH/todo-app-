import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";

interface Props {
  isValidate: boolean;
  setIsvalidate: React.Dispatch<React.SetStateAction<boolean>>;
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
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  editedTask: {
    id: string;
    title: string;
    priority: string;
    isDone: boolean;
  };
  setEditedTask: React.Dispatch<
    React.SetStateAction<{
      id: string;
      title: string;
      priority: string;
      isDone: boolean;
    }>
  >;
}

function EditModal({
  taskList,
  setTaskList,
  editedTask,
  setEditedTask,
  setOpen,
  isValidate,
  open,
}: Props) {
  const handleUpdateTask = () => {
    const newTaskList = taskList.map((task) => {
      if (editedTask.id === task.id) {
        return editedTask;
      } else {
        return task;
      }
    });
    setTaskList(newTaskList);
    setOpen(false);
  };

  return (
    <Dialog maxWidth={"lg"} open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Edit task</DialogTitle>
      <DialogContent>
        <DialogContentText>Edit your task</DialogContentText>
        <Stack direction={"row"} gap={2} width={500} marginTop={2}>
          <TextField
            error={isValidate && editedTask.title.trim() === ""}
            id="outlined-basic"
            label="Title"
            variant="outlined"
            value={editedTask.title}
            sx={{ flex: 3 }}
            onChange={(e) =>
              setEditedTask({
                ...editedTask,
                title: e.target.value,
              })
            }
          />
          <Box sx={{ flex: 1 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Priority</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue={editedTask.priority}
                label="Priority"
                onChange={(event) =>
                  setEditedTask({
                    ...editedTask,
                    priority: event.target.value,
                  })
                }
              >
                <MenuItem value={"high"}>High</MenuItem>
                <MenuItem value={"normal"}>Normal</MenuItem>
                <MenuItem value={"low"}>Low</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button onClick={handleUpdateTask}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditModal;
