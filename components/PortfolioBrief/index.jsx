import style from './styles.scss';

export default class PortfolioBrief extends React.Component {
  render() {
    const { brief } = this.props;
    return (
      <div className={style.PortfolioBrief}>
        <h2 className={style.title}>Brief</h2>
        <p className={style.brief}>{brief}</p>
      </div>
    );
  }
}
