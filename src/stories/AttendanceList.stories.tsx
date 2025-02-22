import { Meta, StoryFn } from '@storybook/react';
import AttendanceList, { AttendanceListProps } from '../components/AttendanceList';

export default {
  title: 'Components/AttendanceList',
  component: AttendanceList,
  argTypes: {
    attended: { control: 'object', description: 'Array of attended people.' },
    absent: { control: 'object', description: 'Array of absent people.' },
  },
  parameters: {
    docs: {
      description: {
        component: `
        # AttendanceList Component

        This component displays a list of attendees, categorized as "Attended" and "Absent". It includes a search bar to filter the lists and allows users to expand or collapse each category.

        ## Installation

        \`\`\`bash
        npm install your-component-library
        \`\`\`

        ## Import

        \`\`\`jsx
        import AttendanceList from 'your-component-library/components/AttendanceList';
        \`\`\`

        ## Usage

        \`\`\`jsx
        <AttendanceList attended={attendedData} absent={absentData} />
        \`\`\`

        ## Props

        | Prop      | Type     | Description                     |
        |-----------|----------|---------------------------------|
        | attended  | Person[] | Array of attended people.      |
        | absent    | Person[] | Array of absent people.        |

        ### Person Object

        \`\`\`typescript
        interface Person {
          id: number;
          name: string;
          image: string;
          email: string; // Added email property
        }
        \`\`\`

        ## Interactive Examples

        Use the controls below to modify the \`attended\` and \`absent\` props and see the changes in real-time.
        `,
      },
    },
  },
} as Meta<typeof AttendanceList>;

const Template: StoryFn<AttendanceListProps> = (args: AttendanceListProps) => <AttendanceList {...args} />;

export const Default = Template.bind({});
Default.args = {
  attended: [
    { id: 1, name: 'Dianne Russell', image: 'https://randomuser.me/api/portraits/women/1.jpg', email: 'dianne@example.com' },
    { id: 2, name: 'Ronald Richards', image: 'https://randomuser.me/api/portraits/men/2.jpg', email: 'ronald@example.com' },
    { id: 3, name: 'Arlene McCoy', image: 'https://randomuser.me/api/portraits/women/3.jpg', email: 'arlene@example.com' },
    { id: 4, name: 'Kathryn Murphy', image: 'https://randomuser.me/api/portraits/women/4.jpg', email: 'kathryn@example.com' },
    { id: 5, name: 'Savannah Nguyen', image: 'https://randomuser.me/api/portraits/women/5.jpg', email: 'savannah@example.com' },
    { id: 6, name: 'Albert Flores', image: 'https://randomuser.me/api/portraits/men/6.jpg', email: 'albert@example.com' },
  ],
  absent: [
    { id: 7, name: 'Jenny Wilson', image: 'https://randomuser.me/api/portraits/women/7.jpg', email: 'jenny@example.com' },
    { id: 8, name: 'Wade Warren', image: 'https://randomuser.me/api/portraits/men/8.jpg', email: 'wade@example.com' },
  ],
};

export const EmptyLists = Template.bind({});
EmptyLists.args = {
  attended: [],
  absent: [],
};
EmptyLists.parameters = {
  docs: {
    description: {
      story: 'This story shows the component with empty lists.',
    },
  },
};

export const LargeLists = Template.bind({});
LargeLists.args = {
  attended: Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `Attendee ${i + 1}`,
    image: `https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i + 1}.jpg`,
    email: `attendee${i + 1}@example.com`,
  })),
  absent: Array.from({ length: 15 }, (_, i) => ({
    id: i + 21,
    name: `Absentee ${i + 1}`,
    image: `https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${i + 1}.jpg`,
    email: `absentee${i + 1}@example.com`,
  })),
};
LargeLists.parameters = {
  docs: {
    description: {
      story: 'This story shows the component with large lists to test performance and scrolling.',
    },
  },
};

export const SearchTerm = Template.bind({});
SearchTerm.args = {
  attended: [
    { id: 1, name: 'Dianne Russell', image: 'https://randomuser.me/api/portraits/women/1.jpg', email: 'dianne@example.com' },
    { id: 2, name: 'Ronald Richards', image: 'https://randomuser.me/api/portraits/men/2.jpg', email: 'ronald@example.com' },
    { id: 3, name: 'Arlene McCoy', image: 'https://randomuser.me/api/portraits/women/3.jpg', email: 'arlene@example.com' },
  ],
  absent: [
    { id: 7, name: 'Jenny Wilson', image: 'https://randomuser.me/api/portraits/women/7.jpg', email: 'jenny@example.com' },
    { id: 8, name: 'Wade Warren', image: 'https://randomuser.me/api/portraits/men/8.jpg', email: 'wade@example.com' },
  ],
};
SearchTerm.parameters = {
  docs: {
    description: {
      story: 'Try searching for "Dianne" or "Jenny" to see the search functionality.',
    },
  },
};