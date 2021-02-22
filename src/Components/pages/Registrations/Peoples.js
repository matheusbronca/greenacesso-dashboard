import React from 'react';
import '../../../styles/Components/Common.css';
import Header from '../../common/Header';
import Content from '../../common/Content';
import SearchBar from '../../common/SearchBar';
import ActionBar from '../../common/ActionBar';
import ListBox from '../../common/ListBox';
import {
  FiPlusCircle,
  FiEdit,
  FiUnlock,
  FiTrash,
  FiRefreshCcw,
} from 'react-icons/fi';
import { connect } from 'react-redux';
import * as actionCreator from '../../../store/actions/action';

const actions = [
  {
    label: 'Adicionar',
    icon: <FiPlusCircle />,
    onClick: null,
  },
  {
    label: 'Editar',
    icon: <FiEdit />,
    onClick: null,
  },
  {
    label: 'Biometria',
    icon: <FiUnlock />,
    onClick: null,
  },
  {
    label: 'Deletar',
    icon: <FiTrash />,
    onClick: null,
  },
  {
    label: 'Atualizar',
    icon: <FiRefreshCcw />,
    onClick: null,
  },
];

function Peoples({ getUsersData, users }) {
  React.useEffect(() => {
    return getUsersData();
  }, [getUsersData]);

  const handleClick = (e) => {};

  return (
    <section>
      <Header title="Cadastros / Pessoas" />
      <Content>
        <SearchBar
          placeholder="Pesquise pelo nome ou CPF..."
          onClick={handleClick}
        />
        <ActionBar actions={actions} />
        <ListBox data={users} />
      </Content>
    </section>
  );
}

const mapStateToProps = (users) => {
  return {
    users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsersData: () => dispatch(actionCreator.getUsersData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Peoples);
