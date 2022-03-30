export const style = ({ color, bg }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    background: `${bg}`,
    border: `1px solid ${color}`,
    boxShadow: 25,
    borderRadius: 3,
    p: 4,
    display: 'flex',
    justifyContent: 'center',
});
