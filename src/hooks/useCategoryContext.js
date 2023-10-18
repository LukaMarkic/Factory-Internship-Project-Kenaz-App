import { useContext } from "react"
import CategoryContext from "../context/CategoryContext"

function useCategoryContext() {
    return useContext(CategoryContext)
}

export default useCategoryContext;