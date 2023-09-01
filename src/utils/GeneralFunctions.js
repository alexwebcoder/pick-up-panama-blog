
export const TabTitle = (newTitle) => {
    return (document.title = newTitle);
};


export const Capitalize = () => {
    if (document.title == "Is panama safe") {
        document.title = "Is Panama Safe?"
      }
    
    if (document.title == "How do i visit the panama canal") {
    document.title = "How Do I Visit the Panama Canal?"
    }
    
    if (document.title == "How do i get around in panama") {
        document.title = "How do I get Around in Panama?"
    }

    if (document.title == "What are molas") {
        document.title = "What are Molas?"
    }
}