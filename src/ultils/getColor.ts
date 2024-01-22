export const getColor = (priority: string) => {
    switch (priority){
        case "high":
            return "error";
        case "normal": 
            return "warning";
        case "low":
            return "success";
    }
}
