
export const TabTitle = (newTitle) => {
    return (document.title = newTitle);
};


export const Capitalize = () => {

    if (document.title === "How Do I Visit the Panama Canal?") {
        document.getElementsByTagName('meta')["description"].content = "Read this to understand the importance of the Panama Canal and the best ways to observe it.";
    }
  
    if (document.title === "Is panama safe") {
        document.title = "Is Panama Safe?";
        document.getElementsByTagName('meta')["description"].content = "Follow these tips to stay safe in Panama. Learn how to prevent muggings, avoid bad areas, and more.";
      }
    
    if (document.title === "How do i get around in panama") {
        document.title = "How do I get Around in Panama?"
        document.getElementsByTagName('meta')["description"].content = "Learn about Panama's metro train, buses, and taxi system to efficiently get around without overpaying for cabs."
    }

    if (document.title === "Things to do in el cangrejo") {
        document.title = "Things to do in El Cangrejo"
        document.getElementsByTagName('meta')["description"].content = "Discover the best restaurants and activities in El Cangrejo and learn why it is worth vistiting.";
    }
    if (document.title === "How much spanish do i need to know in panama") {
        document.title = "How much Spanish do I need to know in Panama?"
        document.getElementsByTagName('meta')["description"].content = "Learn about the spoken Spanish of Panama and why Spanish is important to learn.";
    }

    if (document.title === "Pick Up Panama | Learn About Panama") {
        document.getElementsByTagName('meta')["description"].content = "Pick Up Panama is a blog that provides information, culture, and lifestyle about Panama.";
    }

    if (document.title === "About Pick Up Panama") {
        document.getElementsByTagName('meta')["description"].content = "Pick Up Panama helps solve some of the challenges that come with visiting Panama.";
    }

    if (document.title === "Contact Pick Up Panama") {
        document.getElementsByTagName('meta')["description"].content = "Alex will respond to any questions you have regarding Pick Up Panama.";
    }

    if (document.title === "Panama News Feed") {
        document.getElementsByTagName('meta')["description"].content = "Read the newsfeed to stay up to date on the latest news from Panama.";
    }
}