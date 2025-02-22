import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AttendanceList, { Person } from './AttendanceList';

const mockAttended: Person[] = [
  {
    id: 1,
    name: "Dianne Russell",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    email: "dianne@hotmail.com",
  },
  {
    id: 2,
    name: "Ronald Richards",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    email: "ronald@hotmail.com",
  }
];

const mockAbsent: Person[] = [
  {
    id: 3,
    name: "Arlene McCoy",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    email: "arlene@hotmail.com",
  }
];

describe('AttendanceList Component', () => {
  test('renders the component correctly', () => {
    render(<AttendanceList attended={mockAttended} absent={mockAbsent} />);
    
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
    expect(screen.getByText('Attended')).toBeInTheDocument();
    expect(screen.getByText('Absent')).toBeInTheDocument();
  });

  test('displays the attended and absent persons', () => {
    render(<AttendanceList attended={mockAttended} absent={mockAbsent} />);
    
    expect(screen.getByText('Dianne Russell')).toBeInTheDocument();
    expect(screen.getByText('Ronald Richards')).toBeInTheDocument();
    expect(screen.getByText('Arlene McCoy')).toBeInTheDocument();
  });

  test('filters the list based on search input', () => {
    render(<AttendanceList attended={mockAttended} absent={mockAbsent} />);
    
    const searchInput = screen.getByPlaceholderText('Search');
    
    fireEvent.change(searchInput, { target: { value: 'John' } });
    
    expect(screen.getByText('Dianne Russell')).toBeInTheDocument();
    expect(screen.queryByText('Ronald Richards')).not.toBeInTheDocument();
    expect(screen.queryByText('Arlene McCoy')).not.toBeInTheDocument();
  });

  test('toggles absent section visibility', () => {
    render(<AttendanceList attended={mockAttended} absent={mockAbsent} />);
    
    const absentHeader = screen.getByText('Absent');
    
    fireEvent.click(absentHeader);
    
    expect(screen.queryByText('Arlene McCoy')).not.toBeInTheDocument();
    
    fireEvent.click(absentHeader);
    
    expect(screen.getByText('Arlene McCoy')).toBeInTheDocument();
  });
});
