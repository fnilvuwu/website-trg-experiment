import { NavBar } from '../components/nav-bar';
import { TeamMemberCard } from '../components/team-member-card';
import { teamMembers } from '../data/team';

export default function AboutPage() {
    // Filter members by role
    const leader = teamMembers.find(member => member.role === 'Leader');
    const lecturers = teamMembers.filter(member => member.role === 'Lecturer');
    const collaborators = teamMembers.filter(member => member.role === 'External Collaborator');
    const researchers = teamMembers.filter(member => member.role === 'Researcher');
    const students = teamMembers.filter(member => member.role === 'Student');

    return (
        <main className="min-h-screen bg-white">
            <NavBar />
            <article className="max-w-6xl mx-auto px-4 py-16 md:py-24 flex-grow">
                <header className="space-y-8 mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
                        Our Team
                    </h1>
                    <div className="text-center uppercase tracking-wider text-sm text-muted-foreground">
                        The People Behind DSAI Lab
                    </div>
                </header>

                {/* Leader Section */}
                {leader && (
                    <div className="mb-20">
                        <h3 className="font-semibold text-center uppercase tracking-wider text-md font-medium text-muted-foreground mb-8">
                            Research Team Leader
                        </h3>
                        <div className="flex justify-center">
                            <TeamMemberCard
                                key={leader.name}
                                {...leader}
                            />
                        </div>
                    </div>
                )}

                {/* Lecturers Section */}
                {lecturers.length > 0 && (
                    <section className="mb-20">
                        <h3 className="font-semibold text-center uppercase tracking-wider text-md font-medium text-muted-foreground mb-8">
                            Lecturers
                        </h3>
                        <div className="flex flex-wrap justify-center gap-x-16 gap-y-8">
                            {lecturers.map((member) => (
                                <TeamMemberCard key={member.name} {...member} />
                            ))}
                        </div>
                    </section>
                )}

                {/* External Collaborators Section */}
                {collaborators.length > 0 && (
                    <section className="mb-20">
                        <h3 className="font-semibold text-center uppercase tracking-wider text-md font-medium text-muted-foreground mb-8">
                            External Collaborators
                        </h3>
                        <div className="flex flex-wrap justify-center gap-x-16 gap-y-8">
                            {collaborators.map((member) => (
                                <TeamMemberCard key={member.name} {...member} />
                            ))}
                        </div>
                    </section>
                )}

                {/* Researchers Section */}
                {researchers.length > 0 && (
                    <section className="mb-20">
                        <h3 className="font-semibold text-center uppercase tracking-wider text-md font-medium text-muted-foreground mb-8">
                            Researchers
                        </h3>
                        <div className="flex flex-wrap justify-center gap-x-16 gap-y-8">
                            {researchers.map((member) => (
                                <TeamMemberCard key={member.name} {...member} />
                            ))}
                        </div>
                    </section>
                )}

                {/* Students Section */}
                {students.length > 0 && (
                    <section className="mb-20">
                        <h3 className="font-semibold text-center uppercase tracking-wider text-md font-medium text-muted-foreground mb-8">
                            Students
                        </h3>
                        <div className="flex flex-wrap justify-center gap-x-16 gap-y-8">
                            {students.map((member) => (
                                <TeamMemberCard key={member.name} {...member} />
                            ))}
                        </div>
                    </section>
                )}
            </article>
        </main>
    )
}
