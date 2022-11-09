import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Peter Photography`;
    }, [title])
}

export default useTitle;