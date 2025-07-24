import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ImmutableModelBase } from "../../../common/data";
import { User } from "../../../users/model";
import { Recruit } from "./recruit.model";

@Entity("applicants")
export class Applicant extends ImmutableModelBase {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "recruit_id", type: "integer" })
    recruitId: number;

    @Column({ name: "user_id", type: "integer" })
    userId: number;

    @ManyToOne(() => Recruit, { onDelete: "CASCADE" })
    @JoinColumn({ name: "recruit_id" })
    recruit: Recruit;

    @ManyToOne(() => User, { onDelete: "CASCADE" })
    @JoinColumn({ name: "user_id" })
    user: User;
}