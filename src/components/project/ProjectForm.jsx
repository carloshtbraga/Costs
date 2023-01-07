import {useEffect, useState} from "react";
import Input from "../form/Input";
import styles from "./ProjectForm.module.css";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

function ProjectForm({ btnText }) {
  const [ categories, setCategories ] = useState([])

  useEffect(()=> {
    fetch("http://localhost:5000/categories", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resposta) => resposta.json())
    .then((data) => {
      setCategories(data);
    })
    .catch((error)=> console.log(error))
  },[])

  return (
    <form action="" className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="Budget"
        placeholder="Insira o orçamento total"
      />
      <Select
        name="category_id"
        text="Selecione a Categoria"
        options={categories}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
