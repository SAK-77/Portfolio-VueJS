/* eslint-disable no-unused-vars */
import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

export const useModalStore = defineStore("modal", ()=> {
    let title = ref("");
    let date = ref("");
    let technology = ref("");
    let links = ref("");
    let imageLinks = ref("");
    let display = ref("");

    let id = 0;

    //Create the array for the information stored inside the slide within the slideshow
    let projectArray = ref([
        {
            id: id++,
            title: "Portfolio",
            date: "23 March 2023",
            technology: "Vue, HTML, CSS, Javascript",
            link: "https://github.com/SAK-77/Portfolio-VueJS",
            imageLinks: "./src/components/images/Portfolio.png"
        },
        {
            id: id++,
            title: "Dynamic Form",
            date: "2 February 2024",
            technology: "HTML, CSS, JavaScript",
            link: "https://github.com/SAK-77/Projet-3_Dynamiser-un-espace-commentaire",
            imageLinks: "./src/components/images/DynamicForm.png"
        },
        {
            id: id++,
            title: "Curriculum Vitae",
            date: "12 October 2023",
            technology: "HTML, CSS",
            link: "https://github.com/SAK-77/Projet_1-CV_en_ligne",
            imageLinks: "./src/components/images/CV.png"
        }
        
    ])

    return{ title, date, technology, links, imageLinks, projectArray }
    
})