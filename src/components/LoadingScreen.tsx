
import { motion } from 'framer-motion';
import { Database, Server, Smartphone } from 'lucide-react';

export function LoadingScreen() {
    return (
        <div data-theme="dark" style={{
            position: 'fixed',
            inset: 0,
            background: 'var(--bg)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            gap: '24px'
        }}>
            <div style={{
                position: 'relative',
                width: '80px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        border: '3px solid var(--primary)',
                        borderRadius: '24px',
                        borderStyle: 'dashed',
                    }}
                />

                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{
                        background: 'var(--primary-bg)',
                        padding: '16px',
                        borderRadius: '16px',
                        color: 'var(--primary)',
                    }}
                >
                    <Server size={32} />
                </motion.div>
            </div>

            <div style={{ textAlign: 'center' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        fontSize: '18px',
                        fontWeight: '600',
                        color: 'var(--gray-900)',
                        marginBottom: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                    }}
                >
                    Menghubungkan ke Database
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >...</motion.span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{
                        fontSize: '13px',
                        color: 'var(--gray-500)',
                        maxWidth: '280px',
                        lineHeight: '1.5'
                    }}
                >
                    Mohon tunggu sebentar, sistem sedang, sedang menyiapkan data produk dan stok...
                </motion.p>
            </div>

            <div style={{
                width: '200px',
                height: '4px',
                background: 'var(--gray-200)',
                borderRadius: '4px',
                overflow: 'hidden'
            }}>
                <motion.div
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{
                        width: '50%',
                        height: '100%',
                        background: 'var(--primary)',
                        borderRadius: '4px'
                    }}
                />
            </div>

            <div style={{
                position: 'absolute',
                bottom: '40px',
                display: 'flex',
                gap: '24px',
                opacity: 0.5
            }}>
                <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                >
                    <Database size={20} color="var(--gray-400)" />
                </motion.div>
                <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                    <Smartphone size={20} color="var(--gray-400)" />
                </motion.div>
            </div>
        </div>
    );
}
