import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import CreateTask from "./componentChild/CreateTask";
import EditModal from "./componentChild/EditModal";
import FilterTaskList from "./componentChild/FilterTask";
import TaskList from "./componentChild/TaskList";
import styles from "./Home.module.scss";

function Home() {
  const [open, setOpen] = useState(false);
  const [isValidate, setIsvalidate] = useState(false);
  const [filter, setFilter] = useState({
    high: true,
    normal: true,
    low: true,
  });
  const [editedTask, setEditedTask] = useState({
    id: "",
    title: "",
    priority: "",
    isDone: false,
  });
  const [task, setTask] = useState({
    id: "",
    title: "",
    priority: "",
    isDone: false,
  });
  const [taskList, setTaskList] = useState<
    {
      id: string;
      title: string;
      priority: string;
      isDone: boolean;
    }[]
  >(() => {
    const storageData = localStorage.getItem("list");
    return storageData ? JSON.parse(storageData) : [];
  });

  useEffect(() => {
    const storageTaskList = JSON.stringify(taskList);
    localStorage?.setItem("list", storageTaskList);
  }, [taskList]);

  return (
    <>
      <EditModal
        taskList={taskList}
        setTaskList={setTaskList}
        editedTask={editedTask}
        setEditedTask={setEditedTask}
        setOpen={setOpen}
        open={open}
        isValidate={isValidate}
        setIsvalidate={setIsvalidate}
      ></EditModal>
      <div className={styles.main}>
        <Box
          sx={{
            padding: 10,
          }}
          className={styles.Mainbox}
        >
          <ToastContainer />
          <Card sx={{ minWidth: 500 }}>
            <CardContent>
              <Typography variant="h4" textAlign={"center"}>
                Todo App MUI
              </Typography>
              <FilterTaskList
                filter={filter}
                setFilter={setFilter}
              ></FilterTaskList>
              <TaskList
                filter={filter}
                taskList={taskList}
                setTaskList={setTaskList}
                setOpen={setOpen}
                setEditedTask={setEditedTask}
              ></TaskList>

              <Divider sx={{ marginY: 1 }}></Divider>
              <CreateTask
                //   number={5}
                //   number2={10}
                task={task}
                isValidate={isValidate}
                setTask={setTask}
                setIsvalidate={setIsvalidate}
                setTaskList={setTaskList}
                taskList={taskList}
              ></CreateTask>
            </CardContent>
          </Card>
        </Box>
      </div>
    </>
  );
}

export default Home;
