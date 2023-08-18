import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    wrapperDrawer: {
        minWidth: '60px',
        textAlign: 'right',
        '& .MuiButtonBase-root': {
            background: 'transparent',
            minWidth: 'unset',
            padding: '0',
            width: '100%',
            position: 'relative',
            '& .MuiIconButton-label': {
                width: 'unset',
                position: 'absolute',
                right: '0',
            },
            '&:hover' : {
                background: 'transparent',
            },
        },
    },
    
    sidebar: {
        width: '100%',
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        padding: '16px',
        gap: '8px',
        '& .wrapper-header': {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '32px',
            alignItems: 'center',
            gap: '16px',
        },
        '& .burger-item': {
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '28px',
            letterSpacing: '0.2px',
            color: '#838486',
            margin: '0 0 16px 0',
        },
        '& .burger-item.active': {
            color: '#128FE1',
            fontWeight: '600',
        },
    },

    icon: {
        color: '#2C3136',
    },
}));

export default useStyles;
