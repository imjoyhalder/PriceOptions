import PropTypes from 'prop-types'

const Link = ({route}) => {
    return (
        <div>
           <li className='mr-8 hover:bg-slate-50 p-1 rounded-md ' key={route.id}>
                    <a href={route.path}>{route.name}</a>
            </li> 
        </div>
    );
};

Link.propTypes = {
    route : PropTypes.object
}


export default Link;