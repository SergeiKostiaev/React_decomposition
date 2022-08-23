import Tabs from "../Tabs/Tabs";
import Courses from "../Courses/Courses";
import './Header.css';
import MediaComponent from "../MediaComponent/MediaComponent";

function Header(props) {
    const mockTabs = [
        {title: 'В РФ', type: 'russia'},
        {title: 'В мире', type: 'world'},
        {title: 'Политика', type: 'politics'},
    ];
    const mockCourses = [
        {title: 'USD', course: 74, diff: '+1'},
        {title: 'EUR', course: 84, diff: '+1,1'},
        {title: 'Нефть', course: 25, diff: '+1,1%'},
    ]
    const mockMediaComponent = {
        img: '',
        title: 'test',
        link: '',
        description: 'description'
    }
    return (
        <div className="header">
            <article>
                <Tabs tabs={mockTabs} active={0}/>
                <Courses data={mockCourses}/>
            </article>
            <article>
                <MediaComponent data={mockMediaComponent}/>
            </article>
        </div>
    )
}

export default Header;