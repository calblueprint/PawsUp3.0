import React, { useState, useEffect } from "react";
import SyncLoader from 'react-spinners/SyncLoader';
import { getLeaderboardEntries } from "../../utils/api";
import styles from './Leaderboard.module.css';

const Leaderboard = () => {
    const [leaderboardData, setLeaderboardData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        getLeaderboardEntries().then((entries) => {
            setLeaderboardData(entries);
            setLoading(false);
        })
    }, []);

    // Sort leaderboard data by total descending
    useEffect(() => {
        const sortedData = [...leaderboardData].sort((a, b) => b.total - a.total);
        setLeaderboardData(sortedData);
    }, [leaderboardData.length]);

    if (loading) {
        return <SyncLoader color="#0078E8" />;
    }

    return (
        <div className={styles.leaderboardContainer}>
            <h2 className={styles.title}>Paws Leaderboard (FA25 Actives Only)</h2>
            <div className={styles.tableWrapper}>
                <table className={styles.leaderboardTable}>
                    <thead>
                        <tr>
                            <th className={styles.rankColumn}>Rank</th>
                            <th className={styles.nameColumn}>Name</th>
                            <th className={styles.totalColumn}>Total</th>
                            <th className={styles.categoryColumn}>Mission First</th>
                            <th className={styles.categoryColumn}>Perpetual Growth</th>
                            <th className={styles.categoryColumn}>Always Innovate</th>
                            <th className={styles.categoryColumn}>Be Humble</th>
                            <th className={styles.categoryColumn}>Cherish Each Other</th>
                            <th className={styles.categoryColumn}>No Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaderboardData.map((entry, index) => (
                            <tr key={index} className={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                                <td className={styles.rankCell}>{index + 1}</td>
                                <td className={styles.nameCell}>{entry.name}</td>
                                <td className={styles.totalCell}>{entry.total}</td>
                                <td className={styles.categoryCell}>{entry.mf || 0}</td>
                                <td className={styles.categoryCell}>{entry.pg || 0}</td>
                                <td className={styles.categoryCell}>{entry.ai || 0}</td>
                                <td className={styles.categoryCell}>{entry.bh || 0}</td>
                                <td className={styles.categoryCell}>{entry.ce || 0}</td>
                                <td className={styles.categoryCell}>{entry.nv || 0}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Leaderboard;