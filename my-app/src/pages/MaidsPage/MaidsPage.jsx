import { getAllMaids, deleteMaid, getOneMaid } from "../../redux/maids/operation";
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { useState } from "react";
import Heading from "../../Heading/Heading";
import EditMaid from '../../EditMaid/EditMaid';
import PostMaids from "../../PostMaids/PostMaids";
import "./maids.css";

const MaidsPage = () => {
    const [open, setOpen] = useState()
    const dispatch = useDispatch();
    const [maids, setMaids] = useState([])
    const [oneMaid, setOneMaid] = useState();
    //const location = useLocation()

    useEffect(() => {
        const allMaids = async () => {
            try{
                const response = await dispatch(getAllMaids())
                setMaids(response.payload)
                return response.payload
            } catch(e) {
                console.log(e)
            }
        }
        allMaids()
    }, [dispatch])

    const deleteOneMaid = async (id) => {
        try{
            const response = await dispatch(deleteMaid(id))
            if(response.payload.foundedMaid){
                window.location.reload(false);
            }
            return response.payload.foundedMaid
        } catch (e) {
            console.log(e)
        }
    }
    const getSpecificMaid = async (id) => {
        try{
            const response = await dispatch(getOneMaid(id))
            setOneMaid(response.payload)
            setOpen(!open)
            return response.payload
        } catch(e) {
            console.log(e)
        }
    }
    return(
        <>
        <Heading/>
        <PostMaids/>
        <table className="maids-table">
            <thead>
                <tr>
                <th>Nume</th>
                <th>Partener</th>
                <th>Rol</th>
                <th>Acțiuni</th>
                </tr>
            </thead>
            <tbody>
                {maids.map((maid) => (
                <tr key={maid._id}>
                    <td>{maid.name}</td>
                    <td>{maid.partner}</td>
                    <td>{maid.rol}</td>
                    <td>
                    <button className="btn edit" onClick={() => getSpecificMaid(maid._id)}>Edit</button>
                    <button className="btn delete" onClick={() => deleteOneMaid(maid._id)}>Delete</button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>


        {open && (<EditMaid oneMaid={oneMaid}/>)}
        </>
    )
}

export default MaidsPage;