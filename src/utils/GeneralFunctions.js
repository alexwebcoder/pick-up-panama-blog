
export const TabTitle = (newTitle) => {
    return (document.title = newTitle);
};


export const Capitalize = () => {

    if (document.title === "How Do I Visit the Panama Canal?") {
        document.getElementsByTagName('meta')["description"].content = "Read this to understand the importance of the Panama Canal and the best ways to observe it.";
    }
  
    if (document.title === "Is panama safe to travel alone") {
        document.title = "Is Panama safe to travel alone?";
        document.getElementsByTagName('meta')["description"].content = "Follow these tips to stay safe in Panama. Learn how to prevent muggings, avoid bad areas, and more.";
      }
    
    if (document.title === "Transportation in panama") {
        document.title = "Transportation in Panama"
        document.getElementsByTagName('meta')["description"].content = "Learn about the Panama metro train, buses, and taxi system to efficiently get around without overpaying for cabs."
    }

    if (document.title === "Things to do in el cangrejo") {
        document.title = "Things to do in El Cangrejo"
        document.getElementsByTagName('meta')["description"].content = "Discover the best restaurants and activities in El Cangrejo and learn why it is worth vistiting.";
    }
    if (document.title === "What languages are spoken in panama") {
        document.title = "What languages are spoken in Panama?"
        document.getElementsByTagName('meta')["description"].content = "Find out what languages are spoken in Panama and understand why it's important to learn Spanish.";
    }
    if (document.title === "The culture of panama") {
        document.title = "The culture of Panama"
        document.getElementsByTagName('meta')["description"].content = "Learn the culture of Panama, dress codes, and how to successfully navigate social interactions.";
    }
    if (document.title === "Traditional food in panama") {
        document.title = "Traditional food in Panama"
        document.getElementsByTagName('meta')["description"].content = "Discover traditional Panamanian food dishes, explore the best food in Panama City and find places to eat on a budget.";
    }
    if (document.title === "Using your cell phone with whatsapp in panama") {
        document.title = "Using your cell phone with WhatsApp in Panama"
        document.getElementsByTagName('meta')["description"].content = "Save money on Cell phone service in Panama by using WhatsApp and a Panama cell phone carrier.";
    }
    if (document.title === "Pick Up Panama | Learn About Panama") {
        document.getElementsByTagName('meta')["description"].content = "Pick Up Panama is a blog that provides information, culture, and lifestyle about Panama.";
    }

    if (document.title === "About Pick Up Panama") {
        document.getElementsByTagName('meta')["description"].content = "This Panama travel guide helps solve some of the challenges that come with visiting Panama.";
    }

    if (document.title === "Contact Pick Up Panama") {
        document.getElementsByTagName('meta')["description"].content = "Alex will respond to any questions you have regarding Pick Up Panama.";
    }

    if (document.title === "Panama News Feed") {
        document.getElementsByTagName('meta')["description"].content = "Read the newsfeed to stay up to date on the latest news from Panama.";
    }

    if (document.title === "Panama Blog") {
        document.getElementsByTagName('meta')["description"].content = "Learn lots of Panama travel tips from this archive of panama blogs.";
    }
}