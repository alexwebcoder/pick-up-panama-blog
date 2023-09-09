
export const TabTitle = (newTitle) => {
    return (document.title = newTitle);
};


export const Capitalize = () => {

    if (document.title === "How Do I Visit the Panama Canal?") {
        document.getElementsByTagName('meta')["description"].content = "Panama Canal Guide";
    }
  
    if (document.title === "Is panama safe") {
        document.title = "Is Panama Safe?";
        document.getElementsByTagName('meta')["description"].content = "Do you want to stay safe in Panama? Learn what precautions you can take to enjoy your trip and avoid being a target for crime.";
      }
    
    if (document.title === "How do i visit the panama canal") {
        document.title = "How Do I Visit the Panama Canal?"
        document.getElementsByTagName('meta')["description"].content = "panama canal visit page";
    }
    
    if (document.title === "How do i get around in panama") {
        document.title = "How do I get Around in Panama?"
        document.getElementsByTagName('meta')["description"].content = "panama transportation page";
    }

    if (document.title === "What are molas") {
        document.title = "What are Molas?"
        document.getElementsByTagName('meta')["description"].content = "panama mola page";
    }

    if (document.title === "Pick Up Panama | Learn About Panama") {
        document.getElementsByTagName('meta')["description"].content = "Pick Up Panama answers questions that people have about Panama and provides a resource of Panamanian culture and lifestyle.";
    }

    if (document.title === "About Pick Up Panama") {
        document.getElementsByTagName('meta')["description"].content = "About page";
    }

    if (document.title === "Contact Pick Up Panama") {
        document.getElementsByTagName('meta')["description"].content = "Contact page";
    }

    if (document.title === "Panama News Feed") {
        document.getElementsByTagName('meta')["description"].content = "news page";
    }
}