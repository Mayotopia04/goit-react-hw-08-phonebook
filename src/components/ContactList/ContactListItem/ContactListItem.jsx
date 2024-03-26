import css from "./ContactListItem.module.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContact, updateContact } from "../../../redux/contacts/contactsOperation";
import { Button, Modal, Box, FormControl, TextField, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";
import { MuiTelInput } from "mui-tel-input";

export const ContactListItem = ({ filteredContact }) => {
    
    const dispatch = useDispatch();
    const [name, setName] = useState(filteredContact.name);
    const [number, setNumber] = useState(filteredContact.number);
    const [onOpen, setOnOpen] = useState(false);
    // const  onOpen = useDisclosure();

    const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#69587bee',
    border: '1px solid #000',
    boxShadow: 24,
    borderRadius: 2,
    p: 4,
    };

    const nameChangeEvent = e => {
        setName(e.target.value);
    }; 

    const numberChangeEvent = e => {
        setNumber(e);
    };

    //handleDelete method
    const handleDelete = () => {
        dispatch(deleteContact(filteredContact.id));
    };

    // handleEdit method
    const handleEdit = () => {
        setOnOpen(!onOpen);
        
    };

    const handleUpdate = () => {
        setOnOpen(!onOpen);
        dispatch(updateContact({ id: filteredContact.id, name, number }));
    };

    return (
        <>
        <Box sx={{color: "white", display: "flex", justifyContent: "flex-end"}}>
        <li className={css.contactListItem}>
                <Typography>{filteredContact.name}:</Typography>
                <Typography>{filteredContact.number}</Typography>
                    <Button variant="contained" onClick={handleDelete}>
                        <DeleteIcon />
                    </Button>
                    <Button variant="contained" onClick={handleEdit}>Edit
                    <EditIcon />
                    </Button>
            
            
<Modal
    open={onOpen}
    onClose={false}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
>
    <Box sx={style}>
        <FormControl sx={{display: "flex", gap: "20px", marginTop: "50px"}}>
            <TextField variant="outlined" label="Name" value={name} onChange={nameChangeEvent} />

            <MuiTelInput value={number} onChange={numberChangeEvent} />
                            
            <Button variant="contained" sx={{alignSelf: "center"}} onClick={handleEdit} >Cancel</Button>
            <Button variant="contained" sx={{ alignSelf: "center" }} type="submit" onClick={handleUpdate}>&nbsp;&nbsp;Save&nbsp;&nbsp;&nbsp;</Button> 
        </FormControl>
    </Box>
</Modal>

        </li>
        </Box>
        </>
    );
};

ContactListItem.propTypes = {
    filteredContact: PropTypes.object.isRequired,
};