import React from 'react'
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import ReactImageFileToBase64 from "react-file-image-to-base64";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Container = styled.div`
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    align-items: center;
    border: 2px dashed  ${({ theme }) => theme.text_primary + "80"}};
    border-radius: 12px;
    color: ${({ theme }) => theme.text_primary + "80"};
    margin: 30px 20px 0px 20px;
`;

const Typo = styled.div`
    font-size: 14px;
    font-weight: 600;
`;

const TextBtn = styled.div`
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
`;

const Img = styled.img`
    height: 120px !important;
    width: 100%;
    object-fit: cover;
    border-radius: 12px;
`;

const ImageSelector = ({ podcast, setPodcast }) => {
    const handleOnCompleted = files => {
        setPodcast((prev) => {
            return { ...prev, thumbnail: files[0].base64_file };
        });
    };

    const CustomisedButton = ({ triggerInput }) => {
        return (
            <TextBtn onClick={triggerInput}>
                Browse Image
            </TextBtn>
        );
    };
    return (
        <Container>
            {podcast.thumbnail !== "" ? <Img src={podcast.thumbnail} /> : <>
                <CloudUploadIcon sx={{ fontSize: "40px" }} />
                <Typo>Click here to upload thumbnail</Typo>
                <div style={{ display: "flex", gap: '6px' }}>
                    <Typo>or</Typo>
                    <ReactImageFileToBase64
                        onCompleted={handleOnCompleted}
                        CustomisedButton={CustomisedButton}
                        multiple={false}
                    />
                </div>
            </>}
        </Container>
    )
}

export default ImageSelector