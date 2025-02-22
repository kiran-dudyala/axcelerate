import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export interface Person {
  id: number;
  name: string;
  image: string;
  email: string;
}

export interface AttendanceListProps {
  attended: Person[];
  absent: Person[];
}

const ListContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 15px;

  input {
    border: none;
    outline: none;
    flex-grow: 1;
    padding-left: 8px;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
  border-bottom: 1px solid #eee;

  h3 {
    margin: 0;
    font-size: 1rem;
  }
`;

const Img = styled.img`
  width: 150px;
`;

const ListItem = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    margin-top: 5px;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  span:first-child {
    font-weight: bold;
  }

  span:last-child {
    font-size: 0.8rem;
    color: #666;
  }
`;

const AttendanceList: React.FC<AttendanceListProps> = ({
  attended,
  absent,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showAttended, setShowAttended] = useState<boolean>(true);
  const [showAbsent, setShowAbsent] = useState<boolean>(true);

  const filteredAttended = attended.filter((person: Person) =>
    person.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  const filteredAbsent = absent.filter((person: Person) =>
    person.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (searchTerm && filteredAttended.length > 0) {
      setShowAttended(true);
    }
    if (searchTerm && filteredAbsent.length > 0) {
      setShowAbsent(true);
    }
  }, [searchTerm, filteredAttended, filteredAbsent]);

  return (
    <>
      <div className="page lists-show">
        <nav>
          <Img src="https://cdn.prod.website-files.com/648a830e8b95457fb1b56486/677b29f941a6a6503f3250a4_aXcelerate%20Logo%20Trademarked.png" alt="aXcelerate"></Img>
        </nav>
        <ListContainer>
          <SearchBar>
            <FaSearch />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchBar>

          <SectionHeader onClick={() => setShowAttended(!showAttended)}>
            <h3>Attended</h3>
            <span>{showAttended ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
          </SectionHeader>
          {showAttended &&
            filteredAttended.map((person: Person) => (
              <ListItem key={person.id}>
                <img src={person.image} alt={person.name} />
                <div>
                  <span>{person.name}</span>
                  <span>{person.email}</span>
                </div>
              </ListItem>
            ))}

          <SectionHeader onClick={() => setShowAbsent(!showAbsent)}>
            <h3>Absent</h3>
            <span>{showAbsent ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
          </SectionHeader>
          {showAbsent &&
            filteredAbsent.map((person: Person) => (
              <ListItem key={person.id}>
                <img src={person.image} alt={person.name} />
                <div>
                  <span>{person.name}</span>
                  <span>{person.email}</span>
                </div>
              </ListItem>
            ))}
        </ListContainer>
      </div>
    </>
  );
};

export default AttendanceList;