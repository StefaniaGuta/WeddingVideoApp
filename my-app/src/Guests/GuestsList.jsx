import { useEffect, useState } from 'react';
import { getAllGuests, oneGuest, deleteGuest } from '../redux/operations';
import { useDispatch } from 'react-redux';
import EditGuestModal from '../EditGuest/EditGuest';
import PostGuests from '../PostGuests/PostGuests';
import SearchBar from '../SearchBar/SearchBar';

const GuestList = () => {
  const dispatch = useDispatch();
  const [guests, setGuests] = useState([]);
  const [open, setIsOpen] = useState(false);
  const [oneSpecificGuest, setOneGuest] = useState(null);
  const [filterType, setFilterType] = useState("all");

  const listGuests = () => {
    if (filterType === "merried") {
      return guests.filter((guest) => guest.nunta === true);
    } else if (filterType === "unmerried") {
      return guests.filter((guest) => guest.nunta === false);
    }
    return guests;
  };

  useEffect(() => {
    const allGuests = async () => {
      try {
        const response = await dispatch(getAllGuests());
        setGuests(response.payload);
      } catch (e) {
        console.log(e);
      }
    };
    allGuests();
  }, [dispatch]);

  const getOneGuest = async (id) => {
    try {
      const response = await dispatch(oneGuest(id));
      setIsOpen(true);
      setOneGuest(response.payload);
    } catch (e) {
      console.log(e);
    }
  };

const deleteOneGuest = async (id) => {
    try{
        const response = await (dispatch(deleteGuest(id)));
        const guestListAfterRemoveOne = guests.filter(guest => guest._id !== id);
            setGuests(guestListAfterRemoveOne)
            window.location.reload(false);
        return response.data
    } catch(e){
        console.log(e)
    }
}

const totalDar = filterType === "merried"
    ? listGuests().reduce((sum, guest) => sum + (Number(guest.dar) || 0), 0)
    : 0;

return (
    <>
    <div style={{display: 'flex', gap: '10px'}}>
      <PostGuests />
      <SearchBar allGuests={listGuests()}/>
    </div>

      <button onClick={() => setFilterType("merried")}>Merried</button>
      <button onClick={() => setFilterType("unmerried")}>Unmerried</button>
      <button onClick={() => setFilterType("all")}>All</button>

      <ol>
        {guests && guests.length ? (
          <>
            {listGuests().map((guest) => (
              <li key={guest._id}>
                <div>{guest.name}</div>

                {filterType === "merried" && guest.nunta && (
                  <p>{guest.dar}</p>
                )}

                <button onClick={() => getOneGuest(guest._id)}>Edit</button>
                <button onClick={() => deleteOneGuest(guest._id)}>
                  Delete
                </button>
              </li>
            ))}
          </>
        ) : (
          <p>No guests</p>
        )}
        {open && <EditGuestModal guest={oneSpecificGuest} />}
      </ol>

      <p>Total invitați: {listGuests().length}</p>
      {filterType === "merried" && (
        <p>Total daruri: {totalDar}</p>
      )}
    </>
  );
};

export default GuestList;