const CardList = props => {
  return (
    <div>
      {props.profiles.map(profile => (
        <Card {...profile} />
      ))}
    </div>
  );
};

const Card = props => {
  const profile = props;
  return (
    <div className="github-profile">
      <img src={profile.avatar_url} />
      <div className="info">
        <div className="name">{profile.name}</div>
        <div className="company">{profile.company}</div>
      </div>
    </div>
  );
};

const Form = props => {
  const [userName, setState] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();
    const response = await axios.get(
      `https://api.github.com/users/${userName}`
    );
    props.appendCard(response.data);
    setState("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userName}
        onChange={event => setState(event.target.value)}
        placeholder="GitHub username"
        required
      />
      <button>Add card</button>
    </form>
  );
};

const App = props => {
  const [profiles, setProfiles] = useState([]);

  const appendCard = newCard => {
    setProfiles(() => [...profiles, newCard]);
  };

  return (
    <div>
      <div className="header">{props.title}</div>
      <Form appendCard={appendCard} />
      <CardList profiles={profiles} />
    </div>
  );
};

ReactDOM.render(<App title="The GitHub Cards App" />, mountNode);
