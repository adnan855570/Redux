import Home from '../components/Home'
import {connect} from 'react-redux'
import { addToCart , removeToCart } from '../services/actions/actions';
const mapStateToProps=state=>({
    cardItems : state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:data=>dispatch(removeToCartHandler(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(Home)
// export default Home;