import './colaborador.css';
import { IoIosCloseCircle } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {


    function favoritar(){
        aoFavoritar(colaborador.id);
    }

    const propsFavoritos = {
        size: 25,
        onClick: favoritar,
        color: '#f73b56'
    }

    return (<div className="colaborador">
        <div className='deletar'>           
            <IoIosCloseCircle 
                size={25} 
                color='#f73b56' 
                title='Deletar 
                colaborador' 
                className='btn'
                onClick={() => aoDeletar(colaborador.id)} 
            />
        </div>
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favoritar'>
            {colaborador.favorito 
                ? <IoMdHeart {...propsFavoritos} />
                : <IoMdHeartEmpty {...propsFavoritos}/>
            }
            </div>
        </div>
    </div>)
}

export default Colaborador