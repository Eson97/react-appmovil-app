import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import { DownloadScreen } from '../Components/App/DownloadScreen';
import { AppsScreen } from '../Components/App/AppsScreen';
import HomeScreen from '../Components/Home/HomeScreen';
import { VersionsScreen } from '../Components/Verison/VersionsScreen';
import { PageNotFoundScreen } from '../Components/Others/PageNotFoundScreen';

export default function Router() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomeScreen />} />
                <Route path='Apps'>
                    <Route path='Create' element={<AppsScreen />} />
                    <Route path='Download' element={<DownloadScreen />} />
                </Route>
                <Route path='Versions' element={<VersionsScreen />} />
                <Route path='*' element={<PageNotFoundScreen />} />
            </Routes>
        </div>
    )
}
