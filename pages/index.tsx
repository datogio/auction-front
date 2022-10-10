import { useEffect } from 'react';
import { PageLayout } from '../components/layouts';
import {
  Navbar,
  Navigation,
  Logo,
  NavigationItem,
  SignOut,
  AddNew,
  Project,
} from '../components';
import { useDispatch, useSelector } from 'react-redux';
import * as projectActions from '../store/project';
import type { Dispatch } from 'react';
import type { NextPage, GetServerSideProps } from 'next';
import { RootState } from '../store';
import { createSelector } from '@reduxjs/toolkit';
import { getToken } from '../services/cookies';

interface IHomePage {
  user: user.User;
}

const createSelectProjects = createSelector(
  ({ projects: state }: RootState) => state.projects,
  (projects) => projects
);

const HomePage: NextPage<IHomePage> = ({ user }) => {
  const projects: project.Response[] = useSelector(createSelectProjects);

  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(projectActions.getAll({ user }));
  }, [dispatch, user]);

  return (
    <PageLayout title="FlipList" description="Home page description">
      <Navbar>
        <Logo />
        <Navigation>
          <NavigationItem>1</NavigationItem>
          <NavigationItem>2</NavigationItem>
          <NavigationItem>
            <SignOut />
          </NavigationItem>
        </Navigation>
      </Navbar>

      <main className="px-5 py-10 space-y-5 md:px-[30%]">
        <div className="bg-[#191A1D] p-3 rounded-lg shadow-lg shadow-[#191A1D]">
          <AddNew type={AddNew.type.PROJECT} />
        </div>
        {projects.map((project) => (
          <Project key={project.id} project={project}>
            <div>Chart</div>
            <div className="sticky top-20 z-10 shadow-lg shadow-[#191A1D]">
              <AddNew type={AddNew.type.TASK} />
            </div>
          </Project>
        ))}
      </main>
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps<IHomePage> = async (
  ctx
) => {
  const token = getToken(ctx.req, ctx.res);

  const headers = new Headers();
  headers.set('Accept', 'application/json');
  headers.set('Content-Type', 'application/json');
  headers.set('Authorization', `Bearer ${token}`);

  const userResp = await fetch(`http://localhost:1337/api/users/me`, {
    headers,
  });
  const user = await userResp.json();

  return {
    props: {
      user,
    },
  };
};

export default HomePage;
