import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Physical AI & Humanoid Robotics Course',
      link: {
        type: 'generated-index',
        title: 'Course Overview',
        description: 'An overview of the Physical AI & Humanoid Robotics Course.',
        slug: '/category/course-overview',
      },
      items: [
        'week-01-02-introduction',
        'week-03-05-ros2-fundamentals',
        'week-06-07-robot-simulation',
        'week-08-10-nvidia-isaac-platform',
        'week-11-12-humanoid-robot-development',
        'week-13-conversational-robotics',
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
