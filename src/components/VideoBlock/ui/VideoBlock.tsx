import { classNames } from '../../../shared/utils/classNames/classNames'
import cls from './VideoBlock.module.scss'

interface VideoBlockProps {
className?: string
}

export const VideoBlock = ({className}: VideoBlockProps) => {
    const mods = {}
    return (
        <div className={classNames(cls.VideoBlock, {}, [className])}>
            <div className={cls.container}>
                <section className={cls.videoSection}>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/phle_V_e3UQ?si=ZkoAz9tuCvZ2p_29" 
                        title="YouTube video player" 
                        // eslint-disable-next-line max-len
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen
                    >
                    </iframe>
                </section>
            </div>
        </div>
    )
}