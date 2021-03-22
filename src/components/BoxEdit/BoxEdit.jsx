import classNames from 'classnames';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showEditForm } from '../../actions/dropdownMenu';
import { changeAbout, changeAvatar, changeName, changeNumber, changeWebUrl, changeWork, getCurrentUser, setDefault } from '../../actions/user';
import AuthService from "../../services/auth.service";
import Node from '../Node/Node';
import OverlayForm from '../Overlay/OverlayForm';
import './BoxEdit.scss';


const BoxEdit = () => {
    const user = useSelector(state => state.userReducer.user);
    const userEdited = useSelector(state => state.userReducer.userEdited);
    const isShow = useSelector(state => state.dropdownReducer.showEditForm);
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');

    const handleCloseForm = () => {
        dispatch(showEditForm(false));
        dispatch(setDefault(user));
    }

    const handleEditUser = async (e) => {
        e.preventDefault();
        dispatch(getCurrentUser(userEdited));
        await AuthService.editUser(token, userEdited).data;
        window.location.reload();
    }

    const handleChangeName = (e) => {
        dispatch(changeName(e.target.value))
    }

    const handleChangeAbout = (e) => {
        dispatch(changeAbout(e.target.value))
    }

    const handleChangeWork = (e) => {
        dispatch(changeWork(e.target.value))
    }

    const handleChangeNumber = (e) => {
        dispatch(changeNumber(e.target.value))
    }

    const handleChangeUrl = (e) => {
        dispatch(changeWebUrl(e.target.value))
    }
    const handleChangeAvatar = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            dispatch(changeAvatar(reader.result));
        };
        reader.readAsDataURL(file);
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={classNames('edit', { showEdit: isShow })}>
            <div className="edit_box">
                <h2 className="edit_title profile_title">
                    <div className="edit_icon">
                        <i className="ri-edit-line ri-3x"></i>
                    </div>
                    Edit profile
                    <div className="profile_btn edit_btn profile_btn--danger" onClick={() => handleCloseForm()}>
                        <i className="ri-close-line ri-2x"></i>
                        <Node text="Close" />
                    </div>
                </h2>
                <div className="edit_content">
                    <div className="profile_avatar edit_avatar">
                        <img src={userEdited.avatarUrl} alt="" width={100} height={100} />
                        <input className="edit_inputFile" type="file" onChange={(e) => handleChangeAvatar(e)} />
                    </div>
                    <ul className="profile_list edit_list">
                        <li className="profile_item">
                            <div className="profile_item-name edit_item-name">Name</div>
                            <input type="text" value={userEdited.name} className="profile_item-content textarea" onChange={(e) => handleChangeName(e)} />
                        </li>
                        <li className="profile_item">
                            <div className="profile_item-name edit_item-name">About</div>
                            <textarea value={userEdited.aboutMe} className="profile_item-content textarea textarea--height" onChange={(e) => handleChangeAbout(e)} />
                        </li>
                        <li className="profile_item">
                            <div className="profile_item-name edit_item-name">Work</div>
                            <input type="text" className="profile_item-content textarea" value={userEdited.work} onChange={(e) => handleChangeWork(e)} />
                        </li>
                        <li className="profile_item">
                            <div className="profile_item-name edit_item-name">Phone</div>
                            <input type="text" className="profile_item-content textarea" value={userEdited.phoneNumber} onChange={(e) => handleChangeNumber(e)} />
                        </li>
                        <li className="profile_item">
                            <div className="profile_item-name edit_item-name">Email</div>
                            <input type="text" className="profile_item-content textarea" value={userEdited.email} disabled />
                        </li>
                        <li className="profile_item">
                            <div className="profile_item-name edit_item-name">Website</div>
                            <input type="text" className="profile_item-content textarea" value={userEdited.webUrl} onChange={(e) => handleChangeUrl(e)} />
                        </li>
                    </ul>
                </div>
                <div className="edit_button">
                    <button type="submit" onClick={(e) => handleEditUser(e)} className="edit_btn--green profile_btn">Save</button>
                </div>
            </div>
            <OverlayForm handleCloseForm={handleCloseForm} />
        </div >
    );
};

export default BoxEdit;