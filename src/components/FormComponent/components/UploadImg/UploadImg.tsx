import { Button } from '@material-ui/core';
import { fileToBase64 } from 'helper/base64';
import { useStyles } from './styles';

interface UploadImgProps {
    setFieldValue: (field: string, value: unknown) => void;
    value: string;
}

export const UploadImg: React.FC<UploadImgProps> = ({ setFieldValue, value }) => {
    const classes = useStyles();
    const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const data = await fileToBase64(event.currentTarget.files![0]);
        setFieldValue('img', data);
    };

    return (
        <>
            <img src={value} alt="user img" className={classes.userImg} />
            <Button variant="contained" component="label" color="primary">
                Upload File
                <input
                    style={{ display: 'none' }}
                    id="file"
                    name="file"
                    type="file"
                    onChange={handleUpload}
                />
            </Button>
        </>
    );
};
