import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
import { increment } from '../src/store/actions/actionCreators/increment'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const counter: any = useSelector(
    (state: any) => state.counter,
    shallowEqual
  );
  const dispatch: Dispatch<any> = useDispatch();  
  return (  
    <Box margin={20}>
    <Button onClick={() => dispatch(increment(1))}>
      Click Increment
    </Button>
    </Box>
  )
}

export default Home
