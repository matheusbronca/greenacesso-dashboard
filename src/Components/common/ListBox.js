import React from 'react';
import '../../styles/Components/Common/ListBox.css';

const ListBox = ({ data }) => {
  return (
    <>
      <div className="scrollBox">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Usuário</th>
              <th>Github</th>
              <th>Repos</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, key) => {
              return (
                <tr key={item + key}>
                  <td className="gitAvatar">
                    <img src={item.avatar_url} alt="Github Avatar" />
                  </td>
                  <td>{item.login}</td>
                  <td>{item.url}</td>
                  <td><a className="btn" href={item.repos_url}>Repositórios</a></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <span className="countLabel">1 de {data.length} pessoas</span>
    </>
  );
};

export default ListBox;
